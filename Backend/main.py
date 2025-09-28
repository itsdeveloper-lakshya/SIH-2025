# main.py (Firebase Cloud Function for Recommendations)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np 
from firebase_functions import https_fn
from flask_cors import CORS, cross_origin

# =====================================================================================
# PART 1: DATA LOADING AND PREPARATION
# =====================================================================================

# Embedding the data directly in the script for simplicity
# In a real-world scenario, you would load this from a Firebase storage bucket or Firestore
internship_data = {
    'Id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    'Role': ['Web Development Intern', 'Data Science Intern', 'PM Summer Intern', 'Product Strategy Intern', 'Junior Software Intern', 'UX Product Intern', 'Product Management Intern', 'AI-Engineer Intern', 'Product Marketing Intern', 'Mobile App Intern', 'QA Intern', 'Product Data Analyst', 'Junior UI/UX Designer', 'Technical Product Intern', 'Community Manager Intern', 'Cybersecurity Intern', 'Financial Analyst Intern', 'Product Manager Intern', 'Software Development Intern', 'Content Strategy Intern', 'Data Engineering Intern', 'AI/ML Intern', 'Growth Marketing Intern', 'Backend Development Intern', 'Frontend Development Intern', 'Human Resources Intern', 'Business Analyst Intern', 'Technical Support Intern', 'Product Design Intern', 'Operations Intern'],
    'Company Name': ['InnovateX', 'TechGrowth Solutions', 'Global Innovation Inc.', 'Future Forward', 'CloudCo', 'DesignWorks', 'DesignWorks', 'DesignWorks', 'MarketMinds', 'AppGenius', 'CodeVerify', 'InsightHub', 'PixelPerfect', 'TechSolutions', 'ConnectHub', 'SecureCloud', 'FinPulse', 'NextGen', 'DevLabs', 'WordStream', 'DataPipe', 'CogniTech', 'GrowthHackers', 'ServerSide', 'Frontier', 'PeopleConnect', 'BizInsights', 'HelpDesk', 'UXperts', 'FlowOps'],
    'Location': ['Bengaluru', 'Mumbai', 'Remote', 'Delhi', 'Pune', 'Remote', 'Hyderabad', 'Bengaluru', 'Mumbai', 'Bengaluru', 'Remote', 'Mumbai', 'Remote', 'Delhi', 'Remote', 'Pune', 'Mumbai', 'Remote', 'Bengaluru', 'Remote', 'Mumbai', 'Delhi', 'Pune', 'Remote', 'Hyderabad', 'Remote', 'Mumbai', 'Remote', 'Pune', 'Bengaluru'],
    'Skills': [['Agile', 'Market Research', 'UX/UI', 'Jira'], ['Product Lifecycle', 'Data Analysis', 'User Stories', 'SQL'], ['Product Strategy', 'Figma', 'User Research', 'Communication'], ['Product Strategy', 'Business Analysis', 'Roadmapping'], ['Product Roadmap', 'Sprint Planning', 'Metrics', 'Cloud'], ['UX Design', 'User Testing', 'Wireframing'], ['UX Design', 'User Testing', 'Wireframing'], ['UX Design', 'User Testing', 'Wireframing'], ['Marketing', 'SEO', 'Content Creation'], ['iOS', 'Android', 'Agile', 'Jira'], ['QA Testing', 'Bug Tracking', 'Jira'], ['SQL', 'Data Analysis', 'Tableau'], ['Figma', 'Sketch', 'UI/UX Design'], ['Technical Writing', 'APIs', 'SaaS'], ['Social Media', 'Community Management'], ['Cybersecurity', 'Networking'], ['Finance', 'Excel', 'Data Analysis'], ['Agile', 'Jira', 'Product Lifecycle'], ['JavaScript', 'Python', 'React'], ['Content Strategy', 'SEO', 'Writing'], ['ETL', 'SQL', 'AWS'], ['Python', 'Machine Learning', 'TensorFlow'], ['Marketing', 'Data Analysis', 'Growth Hacking'], ['Node.js', 'Express.js', 'MongoDB'], ['HTML', 'CSS', 'JavaScript', 'React'], ['HR', 'Recruitment', 'Communication'], ['Business Analysis', 'Excel', 'SQL'], ['Customer Support', 'Troubleshooting'], ['Figma', 'Sketch', 'UI/UX Design'], ['Operations', 'Project Management']],
    'Industry_Sector': ['IT & Software', 'IT & Software', 'IT & Software', 'IT & Software', 'IT & Software', 'IT & Software', 'IT & Software', 'IT & Software', 'Marketing', 'IT & Software', 'IT & Software', 'Data Science', 'Design', 'IT & Software', 'Marketing', 'IT & Software', 'Finance', 'IT & Software', 'IT & Software', 'Marketing', 'Data Science', 'AI/ML', 'Marketing', 'IT & Software', 'IT & Software', 'HR', 'Finance', 'IT & Software', 'Design', 'Operations'],
    'Job Description': ['Join our product team to work on a cutting-edge SaaS platform. You will be involved in market research, feature definition, and user journey mapping. Strong analytical skills and a passion for technology are a must.', 'Assist in the development and launch of a new mobile app feature. This role offers hands-on experience in product lifecycle management, from ideation to launch and analysis. Ideal for students with a problem-solving mindset.', 'A remote internship focused on digital product strategy. You will collaborate with cross-functional teams to identify new opportunities and define product requirements. Excellent communication skills are required.', 'Dive into product strategy and help shape the future of our enterprise software. This role requires a strategic mindset and a desire to understand complex business problems.', 'Work with a senior PM to manage a key product line. You will contribute to product roadmaps, sprint planning, and performance metrics analysis. Experience with cloud technologies is a plus.', 'Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.', 'Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.', 'Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.', 'Develop and execute marketing strategies for new product launches. You will work on content creation, social media campaigns, and market analysis.', 'Help manage the lifecycle of our flagship mobile application. This role involves working with designers and developers to ship new features.', 'Ensure the quality of our software products through rigorous testing and bug reporting. Attention to detail is key.', 'Analyze user behavior data to provide insights that drive product decisions. Experience with SQL and data visualization tools is a plus.', 'Work on creating intuitive and aesthetically pleasing user interfaces. A portfolio showcasing your design skills is a must.', 'Bridge the gap between engineering and product teams. This role is ideal for students with a technical background and an interest in product management.', 'Grow our user community by engaging with members and creating engaging content. Strong communication skills are essential.', 'Assist in identifying and mitigating security vulnerabilities in our products. This role requires knowledge of cybersecurity principles.', 'Help analyze financial data and create reports to support business decisions. Proficiency in Excel is required.', 'A hands-on role in product management, from feature ideation to launch. Work closely with a team of designers and engineers.', 'Develop and maintain software applications using modern technologies. This role is perfect for aspiring developers.', 'Shape the content strategy for our digital products. You will be involved in content planning and optimization.', 'Assist in building and maintaining data pipelines and infrastructure. Experience with cloud platforms is a plus.', 'Work on developing and deploying machine learning models for our products. This role requires strong programming and math skills.', 'Drive user acquisition and retention through data-driven marketing campaigns. A passion for growth is a must.', 'Develop and maintain backend services and APIs. This role is ideal for students with an interest in server-side technologies.', 'Build and optimize user-facing interfaces for our web applications. Strong knowledge of HTML, CSS, and JavaScript is a plus.', 'Assist the HR team with recruitment, employee onboarding, and policy development. Excellent interpersonal skills are required.', 'Analyze business processes and help identify areas for improvement. This role is for students with strong analytical skills.', 'Provide technical assistance to customers and help troubleshoot product issues. Strong problem-solving skills are a must.', 'Contribute to the design of our digital products, from wireframes to high-fidelity prototypes. A portfolio is required.', 'Assist in optimizing business operations and streamlining workflows. This role is for a highly organized and detail-oriented individual.'],
    'Required_Qualification': ['B.Tech', 'B.Tech', 'Any Graduate', 'B.Tech', 'B.Tech', 'Any Graduate', 'Any Graduate', 'B.Tech', 'Any Graduate', 'B.Tech', 'Any Graduate', 'B.Tech', 'Any Graduate', 'B.Tech', 'Any Graduate', 'B.Tech', 'Any Graduate', 'B.Tech', 'B.Tech', 'Any Graduate', 'B.Tech', 'B.Tech', 'Any Graduate', 'B.Tech', 'B.Tech', 'Any Graduate', 'Any Graduate', 'Any Graduate', 'Any Graduate', 'Any Graduate'],
    'Work_Arrangement': ['In-Office', 'Hybrid', 'Work from Home', 'Hybrid', 'In-Office', 'Work from Home', 'In-Office', 'Work from Home', 'In-Office', 'Hybrid', 'Work from Home', 'Hybrid', 'Work from Home', 'In-Office', 'Work from Home', 'Hybrid', 'In-Office', 'Work from Home', 'Hybrid', 'Work from Home', 'In-Office', 'Hybrid', 'In-Office', 'Work from Home', 'Hybrid', 'Work from Home', 'In-Office', 'Work from Home', 'In-Office', 'Hybrid']
}

df = pd.DataFrame(internship_data)
df['Skills'] = df['Skills'].apply(lambda x: ' '.join(x))
df['Industry_Sector'] = df['Industry_Sector'].fillna('')
df['Job Description'] = df['Job Description'].fillna('')


# =====================================================================================
# PART 2 & 3: CORE RECOMMENDER FUNCTIONS (Modified to return scores)
# =====================================================================================

WEIGHTS = {
    'location': 0.20,
    'skills': 0.40,
    'sector': 0.15,
    'qualification': 0.15,
    'work_arrangement': 0.10
}

def calculate_rule_based_score(user_profile, internship_row):
    score = 0
    if internship_row['Location'] in user_profile.get('preferred_locations', []):
        score += WEIGHTS['location']
    
    user_skills = set(user_profile.get('skills', []))
    internship_skills = set(internship_row['Skills'].split())
    matching_skills = user_skills.intersection(internship_skills)
    
    if internship_skills:
        skill_match_ratio = len(matching_skills) / len(internship_skills)
        score += skill_match_ratio * WEIGHTS['skills']
        
    if internship_row['Industry_Sector'] in user_profile.get('preferred_sectors', []):
        score += WEIGHTS['sector']
        
    req_qual = internship_row['Required_Qualification']
    if req_qual == "Any Graduate" or req_qual == user_profile.get('qualification'):
        score += WEIGHTS['qualification']
        
    if internship_row['Work_Arrangement'] in user_profile.get('preferred_work_arrangement', []):
        score += WEIGHTS['work_arrangement']
        
    return score

def get_rule_based_recommendations(user_profile, df, top_n=10):
    df['rule_score'] = df.apply(
        lambda row: calculate_rule_based_score(user_profile, row), axis=1)
    top_recommendations = df.sort_values(by='rule_score', ascending=False).head(top_n)
    return top_recommendations[['Id', 'Role', 'Company Name', 'Location', 'rule_score']]

def get_ml_recommendations(user_profile, df, top_n=10):
    df['corpus_text'] = (df['Role'] + ' ' + df['Skills'] + ' ' +
                         df['Industry_Sector'] + ' ' + df['Job Description'])
    user_text = (' '.join(user_profile.get('skills', [])) + ' ' + ' '.join(user_profile.get('preferred_sectors', [])) +
                 ' ' + user_profile.get('qualification', ''))
    all_docs = [user_text] + list(df['corpus_text'])
    vectorizer = TfidfVectorizer(stop_words='english', min_df=2)
    tfidf_matrix = vectorizer.fit_transform(all_docs)
    cosine_sim = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:])
    df['ml_score'] = cosine_sim[0]
    
    top_recommendations = df.sort_values(by='ml_score', ascending=False).head(top_n)
    return top_recommendations[['Id', 'ml_score']]

def get_hybrid_recommendations(user_profile, df, top_n=5):
    """
    Combines models and calculates a final Hybrid Score for ranking.
    """
    rule_recs = get_rule_based_recommendations(user_profile, df.copy(), top_n=15)
    ml_recs = get_ml_recommendations(user_profile, df.copy(), top_n=15)
    
    merged_recs = pd.merge(rule_recs, ml_recs, on='Id', how='outer')
    
    merged_recs['rule_score'] = merged_recs['rule_score'].fillna(0)
    merged_recs['ml_score'] = merged_recs['ml_score'].fillna(0)
    
    priority_bonus = 1.0 
    merged_recs['is_priority'] = (merged_recs['rule_score'] > 0) & (merged_recs['ml_score'] > 0)
    
    merged_recs['hybrid_score'] = (
        merged_recs['rule_score'] + 
        merged_recs['ml_score'] + 
        np.where(merged_recs['is_priority'], priority_bonus, 0)
    )

    final_recommendations = merged_recs.sort_values(by='hybrid_score', ascending=False)
    
    results = []
    for _, row in final_recommendations.head(top_n).iterrows():
        original_internship = df.loc[df['Id'] == row['Id']].iloc[0]
        results.append({
            "title": original_internship['Role'],
            "company": original_internship['Company Name'],
            "location": original_internship['Location'],
            "skills": original_internship['Skills'].split(),
            "mode": original_internship['Work_Arrangement'],
            "stipend": 25000,
            "score": min(int(row['hybrid_score'] / 1.7 * 100), 100),
            "description": original_internship['Job Description']
        })
    return results

# =====================================================================================
# PART 4: THE NEW FIREBASE CLOUD FUNCTION
# =====================================================================================

@https_fn.on_request()
@cross_origin()
def get_recommendations_http(req: https_fn.Request):
    """
    HTTP Cloud Function that receives a user profile and returns recommendations.
    """
    if req.method == 'POST':
        try:
            req_json = req.get_json(silent=True)
            user_profile = req_json['user_profile']
            
            # Run the recommendation engine
            recommendations = get_hybrid_recommendations(user_profile, df.copy(), top_n=5)
            
            return https_fn.Response({"recommendations": recommendations}, status=200, headers={'Content-Type': 'application/json'})

        except Exception as e:
            return https_fn.Response({"error": str(e)}, status=500, headers={'Content-Type': 'application/json'})
    else:
        return https_fn.Response({"message": "Please use a POST request with a JSON body."}, status=405)
